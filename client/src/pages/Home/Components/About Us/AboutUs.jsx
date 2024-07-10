const AboutUs = () => {
  return (
    <div>
      <div className="collapse border-b-2 bg-gradient-to-r from-teal-500 to-teal-900 text-black">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          About LifeFlowDonor
        </div>
        <div className="collapse-content">
          <p>Welcome to LifeFlowDonor!</p>
        </div>
      </div>
      <div className="collapse border-b-2 bg-gradient-to-r from-teal-500 to-teal-900 text-black">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Our Mission</div>
        <div className="collapse-content">
          <p>
            At LifeFlowDonor, our mission is to save lives through voluntary
            LifeFlowDonor. We believe that every donor is a hero, and together,
            we can make a significant impact on the health and well-being of
            individuals in need.
          </p>
        </div>
      </div>
      <div className="collapse border-b-2 bg-gradient-to-r from-teal-500 to-teal-900 text-black">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Who We Are</div>
        <div className="collapse-content">
          <p>
            We are a dedicated team of individuals passionate about making a
            difference in our communities. Our platform serves as a bridge
            between blood donors and those requiring life-saving transfusions.
            We aim to create a network of caring individuals who understand the
            importance of giving back.
          </p>
        </div>
      </div>
      <div className="collapse border-b-2 bg-gradient-to-r from-teal-500 to-teal-900 text-black">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
          Why Donate Blood?
        </div>
        <div className="collapse-content">
          <p>
            LifeFlowDonor is a selfless act that directly contributes to the
            health and recovery of patients facing various medical conditions,
            emergencies, and surgeries. By donating blood, you become a lifeline
            for someone in need, providing hope and a chance at a healthier
            future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
