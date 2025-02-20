import YearsOfExperience from "../components/YearsOfExperience";

export default function AboutMore() {
  return (
    <section className="bg-gray-800 h-screen min-h-fit">
      <div className="container lg">
        <div className="flex flex-col gap-5 lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-2xl text-[#e9d600]">
              Skilled and Trusted Electrical Experts
            </h2>
            <p>
              Founded in 2016, DASHWOOD has built a strong reputation as a
              trusted, locally owned and operated electrical service provider in
              Richmond, North Yorkshire, and the surrounding areas. We take
              pride in offering our services through friendly, highly skilled
              technicians who are always happy to assist and provide expert
              advice.
            </p>
            <p>
              Our team is committed to delivering exceptional service, ensuring
              that each client receives reliable, safe, and efficient electrical
              solutions. We focus on building lasting relationships by providing
              dependable, high-quality work with a customer-first approach.
              Whether it’s a small repair or a large installation, you can count
              on us to be there with the professionalism and care you deserve.
            </p>

            <p>
              At DASHWOOD, our mission is simple: to offer personalized,
              top-tier electrical services with honesty, integrity, and
              dedication. We are your local, go-to experts for all things
              electrical.
            </p>
            <div className="flex justify-between flex-col gap-5 sm:gap-1 sm:flex-row">
              <div className="flex flex-row items-center gap-4 w-full sm:w-1/2">
                <div className="rounded-full bg-[#e9d600] p-3 w-16">
                  <img src="/images/icon/engineering.svg" />
                </div>
                <YearsOfExperience />
              </div>
              <div className="flex flex-row items-center gap-4 w-full sm:w-1/2">
                <div className="rounded-full bg-[#e9d600] p-3 w-16">
                  <img src="/images/icon/project.svg" />
                </div>
                <div>
                  <h2 className="text-2xl mb-0">3000+</h2>Electrical Projects
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
            <img src="/images/electrician.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
