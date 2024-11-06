// const servicesData = [
//   {
//     title: "House Battery",
//     link: "house-battery",
//     icon: "house-battery.svg",
//     image: "house-battery.jpg",
//     description:
//       "Home energy storage to optimize power use, lower grid reliance, and ensure backup during outages.",
//   },

//   // {
//   //   title: "Solar Energy",
//   //   link: "solar-energy",
//   //   icon: "solar-energy.svg",
//   //   description:
//   //     "Harness the power of the sun to generate clean, renewable energy for your home or business.",
//   // },
//   {
//     title: "EV Chargers",
//     link: "ev-chargers",
//     icon: "ev-charger.svg",
//     image: "ev-charger.jpg",
//     description:
//       "Install electric vehicle charging stations at your home or workplace for convenient and eco-friendly transportation.",
//   },
//   {
//     title: "Heat Pumps",
//     link: "heat-pumps",
//     icon: "heat-pump.svg",
//     description:
//       "Efficiently regulate your home's temperature by using energy-saving heat pumps for heating and cooling.",
//   },
//   {
//     title: "Wind Power",
//     link: "wind-power",
//     icon: "wind-power.svg",
//     description:
//       "Utilize wind turbines to generate sustainable electricity and reduce reliance on traditional power sources.",
//   },
//   {
//     title: "Smart Home Solutions",
//     link: "smart-home-solutions",
//     icon: "smarthome.svg",
//     description:
//       "Automate and control your home’s lighting, security, and energy usage with smart technology systems.",
//   },
//   {
//     title: "Domestic & Commercial Electrical Work",
//     link: "domestic-and-commercial-electrical-work",
//     icon: "electrician.svg",
//     description:
//       "Professional electrical installations, repairs, and maintenance for both residential and commercial properties.",
//   },
// ];

// export default servicesData;

const servicesData = [
  // {
  //   title: "Solar Energy",
  //   link: "solar-energy",
  //   icon: "solar-energy.svg",
  //   description:
  //     "Harness the power of the sun to generate clean, renewable energy for your home or business.",
  // },
  {
    title: "House Battery",
    link: "house-battery",
    icon: "house-battery.svg",
    image: "house-battery.jpg",
    description:
      "Home energy storage to optimize power use, lower grid reliance, and ensure backup during outages.",
    details: (
      <div>
        <p>
          Our house battery solutions provide enhanced energy security and
          independence from the grid. These batteries store excess energy from
          solar panels or the grid, ensuring backup power when needed and
          reducing electricity costs. With advanced lithium-ion technology, our
          batteries are efficient, reliable, and optimized for both residential
          and commercial setups.
        </p>
        <h4>Benefits of Our House Battery Solutions:</h4>
        <ul className="check-list space-y-3">
          <li>
            <b>Backup Power During Outages:</b> Keep essential appliances
            running during power cuts, ensuring comfort and safety for your
            household.
          </li>
          <li>
            <b>Energy Cost Savings:</b> Store energy during low-cost periods and
            utilize it during peak hours to reduce your electricity bills.
          </li>
          <li>
            <b>Grid Independence:</b> Minimize reliance on the electrical grid,
            making your home more self-sufficient and resilient to grid
            fluctuations.
          </li>
          <li>
            <b>Environmentally Friendly:</b> Store and use solar-generated
            power, reducing reliance on fossil fuels and lowering your carbon
            footprint.
          </li>
        </ul>
        <h4>Key Features:</h4>
        <ul className="check-list space-y-3">
          <li>
            <b>High-Capacity Lithium-Ion Batteries:</b> Long-lasting batteries
            designed for maximum storage and efficient power usage.
          </li>
          <li>
            <b>Scalable Storage Options:</b> Choose from a range of capacities
            tailored to meet different household or business energy needs.
          </li>
          <li>
            <b>Smart Energy Management:</b> Monitor and control energy usage in
            real-time through an app or web interface.
          </li>
          <li>
            <b>Durable and Weather-Resistant:</b> Built to withstand various
            weather conditions, ensuring reliable performance year-round.
          </li>
        </ul>
        <h4>Our Process:</h4>

        <ol className="ul-18-start num-list bold-list space-y-3">
          <li>
            <b>Assessment:</b> Our team evaluates your energy consumption
            patterns and backup needs.
          </li>
          <li>
            <b>Customized Solution:</b> We recommend a tailored battery setup
            optimized for your home or business.
          </li>
          <li>
            <b>Professional Installation:</b> Our certified technicians handle
            the installation with strict adherence to safety standards.
          </li>
          <li>
            <b>Ongoing Support:</b> We offer maintenance, monitoring, and
            support services to keep your system running smoothly.
          </li>
        </ol>
      </div>
    ),
  },

  {
    title: "EV Chargers",
    link: "ev-chargers",
    icon: "ev-charger.svg",
    image: "ev-charger.jpg",
    description:
      "Install electric vehicle charging stations at your home or workplace for convenient and eco-friendly transportation.",
    details:
      "Our electric vehicle (EV) chargers are designed for both residential and commercial use, providing efficient and convenient charging for your EV at home or at the office. We offer a range of charger types, including Level 2 and fast-charging options, which are compatible with all major EV models. With a focus on safety and ease of use, our chargers come equipped with advanced features such as remote monitoring and automatic shut-off. Our installation team ensures compliance with local codes and offers guidance on the optimal placement for quick and accessible charging.",
  },

  {
    title: "Heat Pumps",
    link: "heat-pumps",
    icon: "heat-pump.svg",
    image: "heat-pump.jpg",
    description:
      "Efficiently regulate your home's temperature by using energy-saving heat pumps for heating and cooling.",
    details:
      "Heat pumps offer an energy-efficient way to provide both heating and cooling for your home. By transferring heat rather than generating it, heat pumps can save significant energy and reduce your environmental impact. Our heat pump solutions include both air-source and ground-source systems, designed to suit various climates and property types. We also provide a comprehensive assessment of your home’s insulation, climate, and heating requirements to ensure optimal performance and cost-effectiveness.",
  },

  {
    title: "Wind Power",
    link: "wind-power",
    icon: "wind-power.svg",
    image: "wind-power.jpg",
    description:
      "Utilize wind turbines to generate sustainable electricity and reduce reliance on traditional power sources.",
    details:
      "Harness the power of wind with our small-scale wind turbines, perfect for rural properties looking to reduce their reliance on the grid. Our wind power solutions are designed to be both efficient and low-maintenance, providing clean energy with minimal environmental impact. We offer a range of turbine sizes suited for residential, commercial, or agricultural applications. With a focus on maximizing efficiency, we provide a site assessment to determine the best placement and orientation for wind capture, optimizing your energy generation potential.",
  },

  {
    title: "Smart Home Solutions",
    link: "smart-home-solutions",
    icon: "smarthome.svg",
    image: "smarthome.jpg",
    description:
      "Automate and control your home’s lighting, security, and energy usage with smart technology systems.",
    details:
      "Upgrade your living space with our smart home solutions, designed to improve comfort, security, and energy efficiency. We offer a comprehensive suite of automation services, including smart lighting, security systems, and energy monitoring. Integrate your devices with a central system for easy, voice-controlled management. Our team will work with you to design a system that fits your lifestyle, enhancing convenience and peace of mind while saving energy through optimized usage. Our solutions are compatible with popular smart home platforms and can be customized to grow with future technologies.",
  },

  {
    title: "Domestic & Commercial Electrical Work",
    link: "domestic-and-commercial-electrical-work",
    icon: "electrician.svg",
    image: "electrician.jpg",
    description:
      "Professional electrical installations, repairs, and maintenance for both residential and commercial properties.",
    details:
      "Our licensed electricians provide a full range of electrical services, from simple repairs to complex installations, for both residential and commercial properties. We prioritize safety and compliance with local regulations, ensuring all work is done to the highest standard. Services include lighting installation, panel upgrades, wiring, troubleshooting, and maintenance. For commercial clients, we also offer specialized services like emergency lighting, security system wiring, and energy-efficient retrofitting. Our goal is to deliver reliable, safe, and cost-effective electrical solutions tailored to your needs.",
  },
];

export default servicesData;
