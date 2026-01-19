export default function CompliancePlanning() {
  const sections = [
    {
      title: "DoT Compliance for UL and VNO Licenses",
      items: [
        "AGR (Adjusted Gross Revenue) & License Fee Calculations",
        "Specializing in AGR and License Fee (LF) calculations for all Unified License (UL) and Virtual Network Operator (VNO) ISP"
      ]
    },
    {
      title: "SARAL Reporting",
      subtitle: "(Monthly, Quarterly, Half-Yearly)",
      items: [
        "ISP Nodes / Point of Presence Details",
        "Channel Partners List (Franchisee / Distributors / Last Mile Providers)",
        "Broadband Customers List"
      ]
    },
    {
      title: "TRAI Reporting",
      subtitle: "(Monthly, Quarterly, Half-Yearly, Annual)",
      items: [
        "Internet Subscriber Report",
        "Public WiFi Hotspot Report",
        "Broadband Subscribers Report (Wireline, LSA, Statewise)",
        "Performance Monitoring for Internet Services (PMR)"
      ]
    },
    {
      title: "TTP (Telecom Trusted Portal) Compliance",
      items: [
        "Assistance with TTP registration and ongoing compliance as mandated by DoT",
        "Ensuring adherence to National Security Directives for telecom operators"
      ]
    }
  ];

  return (
    <section className="bg-[#344B63] text-white py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Compliance Planning &<br />Management</h2>
          {/* <button className="bg-white text-[#344B63] px-6 py-3 font-semibold rounded-sm">LIVE CHAT</button> */}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {sections.map((sec, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-2">{sec.title}</h3>
              {sec.subtitle && <p className="text-sm opacity-90 mb-4">{sec.subtitle}</p>}
              <div className="w-14 h-[2px] bg-white mb-4"></div>
              <ul className="space-y-3 text-sm leading-relaxed">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex gap-2"><span>•</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
