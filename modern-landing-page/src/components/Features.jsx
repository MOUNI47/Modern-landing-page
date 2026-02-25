import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Powerful Features</h2>
      <div className="feature-grid">
        <FeatureCard
          title="Fast Performance"
          description="Optimized for speed."
        />
        <FeatureCard
          title="Secure Platform"
          description="Modern security standards."
        />
        <FeatureCard
          title="Easy Integration"
          description="Works with your workflow."
        />
      </div>
    </section>
  );
}

export default Features;