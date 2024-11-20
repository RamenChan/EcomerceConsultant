import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hizmetlerim</h1>
      <ServiceCard
        title="SEO Optimizasyonu"
        description="Web sitenizi arama motorları için optimize ediyoruz."
      />
      <ServiceCard
        title="Pazarlama Stratejileri"
        description="İşinizi büyütmek için stratejiler geliştiriyoruz."
      />
      <ServiceCard
        title="Özel Geliştirme"
        description="İhtiyaçlarınıza özel çözümler sunuyoruz."
      />
    </div>
  );
};

export default Services;
