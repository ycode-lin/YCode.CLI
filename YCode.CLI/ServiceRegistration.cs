using System.Reflection;

namespace YCode.CLI
{
    internal static class ServiceRegistration
    {
        public static IServiceProvider Register(this IServiceCollection services)
        {
            var configManager = new ConfigManager();
            configManager.EnsureConfiguration();

            var key = configManager.GetEnvironmentVariable("YCODE_AUTH_TOKEN")
                      ?? throw new InvalidOperationException("YCODE_AUTH_TOKEN is required but not configured");
            var uri = configManager.GetEnvironmentVariable("YCODE_API_BASE_URI")
                      ?? throw new InvalidOperationException("YCODE_API_BASE_URI is required but not configured");
            var model = configManager.GetEnvironmentVariable("YCODE_MODEL")
                      ?? throw new InvalidOperationException("YCODE_MODEL is required but not configured");

            var workDir = Directory.GetCurrentDirectory();
            var osDescription = System.Runtime.InteropServices.RuntimeInformation.OSDescription;
            var osPlatform = System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Windows)
                ? "Windows"
                : System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.Linux)
                    ? "Linux"
                    : System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(System.Runtime.InteropServices.OSPlatform.OSX)
                        ? "macOS"
                        : "Unknown";

            services.AddSingleton(configManager);
            services.AddSingleton(new AppConfig(key, uri, model, workDir, osPlatform, osDescription));

            services.RegisterAttributedServices();

            return services.BuildServiceProvider();
        }

        private static void RegisterAttributedServices(this IServiceCollection services)
        {
            var assembly = Assembly.GetExecutingAssembly();

            var types = assembly.GetTypes()
                .Where(t => t is { IsAbstract: false, IsClass: true });

            foreach (var type in types)
            {
                var attr = type.GetCustomAttributes()
                    .OfType<InjectAttribute>()
                    .FirstOrDefault();

                if (attr == null)
                {
                    continue;
                }

                var serviceType = attr.ServiceType ?? type;
                var alreadyRegistered = services.Any(descriptor =>
                    descriptor.ServiceType == serviceType &&
                    (descriptor.ImplementationType == type || descriptor.ImplementationInstance?.GetType() == type));

                if (alreadyRegistered)
                {
                    continue;
                }

                switch (attr.Lifetime)
                {
                    case ServiceLifetime.Singleton:
                        services.AddSingleton(serviceType, type);
                        break;
                    case ServiceLifetime.Scoped:
                        services.AddScoped(serviceType, type);
                        break;
                    case ServiceLifetime.Transient:
                        services.AddTransient(serviceType, type);
                        break;
                }
            }
        }
    }

    internal sealed record AppConfig(string Key, string Uri, string Model, string WorkDir, string OsPlatform, string OsDescription);

    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    internal class InjectAttribute : Attribute
    {
        public InjectAttribute(ServiceLifetime lifetime = ServiceLifetime.Singleton)
        {
            this.Lifetime = lifetime;
        }


        public InjectAttribute(Type serviceType, ServiceLifetime lifetime = ServiceLifetime.Singleton)
        {
            this.ServiceType = serviceType;
            this.Lifetime = lifetime;
        }

        public ServiceLifetime Lifetime { get; }

        public Type? ServiceType { get; set; }
    }

    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false, Inherited = false)]
    internal sealed class InjectAttribute<TService> : InjectAttribute where TService : class
    {
        public InjectAttribute(ServiceLifetime lifetime = ServiceLifetime.Singleton) : base(typeof(TService), lifetime)
        { }
    }
}

