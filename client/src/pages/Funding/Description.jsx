/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <div>
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-5">
          Support LifeFlowDonor Initiatives with Your Contribution
        </h2>

        <p>
          Thank you for considering a monetary donation to empower our blood
          donation initiatives! Your support plays a crucial role in ensuring a
          steady and accessible blood supply, ultimately saving lives and making
          a lasting impact on communities in need.
        </p>

        <div className="space-y-5 mt-5">
          <h3 className="text-2xl font-bold">Why Donate Financially?</h3>
          <ul>
            <li>
              <strong>Procurement and Storage:</strong> Enable us to efficiently
              collect and store blood and blood products, ensuring a constant
              supply for emergencies, surgeries, and medical treatments.
            </li>
            <li>
              <strong>Mobile Blood Drives:</strong> Support the organization of
              mobile blood drives, reaching underserved areas and making it
              easier for donors to contribute, even in remote locations.
            </li>
            <li>
              <strong>Community Outreach Programs:</strong> Fund educational
              initiatives that raise awareness about the importance of blood
              donation, dispelling myths, and encouraging regular donors to
              sustain the lifeline.
            </li>
            <li>
              <strong>Donor Recognition:</strong> Recognize and appreciate the
              heroes who step forward to donate. Your donation helps organize
              events, provide certificates, and build a supportive community
              around blood donors.
            </li>
          </ul>
        </div>

        <div className="space-y-5 mt-5">
          <h3 className="text-2xl font-bold">
            How Your Contribution Makes a Difference
          </h3>
          <p>
            Every dollar you contribute goes directly towards ensuring that our
            LifeFlowDonor programs are efficient, sustainable, and able to reach
            those who need it the most. Your support is the driving force behind
            our mission to make a positive impact on countless lives.
          </p>
        </div>

        <div className="mt-5 space-y-5">
          <h3 className="text-2xl font-bold">Ready to Make a Difference?</h3>
          <p>
            Your generosity can transform lives. Whether it's a one-time
            donation or a recurring contribution, every amount makes a
            significant impact. Join us in this noble cause, and together, let's
            make a lasting difference in the lives of those in need.
          </p>
          <p>
            <Link
              to="/donate"
              className="bg-[#8B0000] p-2 text-white hover:bg-green-500 hover:text-white "
            >
              Donate Now and Be a Lifesaver! 🌟
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Description;
