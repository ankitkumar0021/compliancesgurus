'use client'

export default function IDPRContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 space-y-12">

        {/* What is IDPR */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What is IDPR (Inter-Domain Policy Routing)?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            IDPR, or Inter-Domain Policy Routing, is a network routing architecture that allows
            administrators to control how traffic flows across multiple autonomous systems (AS).
            Unlike traditional routing protocols such as BGP that mainly optimize for efficiency,
            IDPR focuses on policy enforcement.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This makes it possible for ISPs to route data not only based on path length but also on:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Security requirements</li>
            <li>Performance benchmarks</li>
            <li>Business agreements</li>
            <li>Compliance rules</li>
          </ul>
        </div>

        {/* Why IDPR Records Matter */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why IDPR Records Matter for ISPs
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For Internet Service Providers, IDPR records serve as a blueprint for policy-based routing.
            By maintaining accurate records, ISPs can:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Enforce Custom Routing Policies – Control traffic flow based on customer-specific needs.</li>
            <li>✅ Enhance Security – Reduce vulnerabilities using trust-based routing and authentication.</li>
            <li>✅ Improve QoS (Quality of Service) – Meet latency and bandwidth guarantees.</li>
            <li>✅ Support Differentiated Services – Offer premium routing options.</li>
          </ul>
        </div>
        {/* What are IDPR Records */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What are IDPR Records?
          </h2>
         <section className="py-10">
      <div className="max-w-3xl px-4">

        <p className="font-semibold mb-4">
          IDPR records are data sets that contain information about:
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>The path a packet should follow across domains</li>
          <li>Policy constraints (e.g., avoid certain regions, prioritize low latency)</li>
          <li>Authentication and validation data for secure communication</li>
          <li>ISPs rely on these records to ensure:</li>
          <li>Compliance with inter-ISP agreements</li>
          <li>Transparent service-level commitments</li>
          <li>Better customer trust and reliability</li>
        </ul>

      </div>
    </section>
        </div>

        {/* Benefits for Customers */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Benefits of IDPR for ISP Customers
          </h2>
          <p className="mb-4">From an end-user perspective, the adoption of IDPR records by ISPs offers clear benefits:</p>
          <ul className="space-y-2 text-gray-700">
            <li>🚀 More reliable connections across multiple regions</li>
            <li>📶 Better network performance for critical workloads</li>
            <li>🔒 Regulatory compliance with data sovereignty and security laws</li>
          </ul>
        </div>
        {/* Future of IDPR */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            The Future of IDPR in ISP Networks
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Although IDPR has not achieved the same adoption as BGP, its principles strongly
            influence policy-based routing, Software-Defined Networking (SDN), and 5G-ready
            architectures. As ISPs face increasing demands for secure and policy-aware networks,
            IDPR records will continue to play a vital role.
          </p>
        </div>

        {/* Conclusion */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            IDPR records help ISPs move beyond traditional routing by integrating policies,
            compliance, and performance into network decisions—enabling smarter and future-ready
            internet services.
          </p>
        </div>

        {/* FAQs */}
        <div>
  <h2 className="text-3xl font-bold mb-6">
    Frequently Asked Questions (FAQs)
  </h2>

  <div className="space-y-6 text-gray-700 leading-relaxed">
    <p>
      <strong>Q1: What is IDPR in networking?</strong><br />
      <strong>A:</strong> IDPR (Inter-Domain Policy Routing) is a routing architecture that enables
      ISPs to control how traffic flows between networks based on policies like security,
      compliance, and performance.
    </p>

    <p>
      <strong>Q2: Why are IDPR records important for ISPs?</strong><br />
      <strong>A:</strong> IDPR records allow ISPs to enforce custom routing policies, improve
      security, enhance QoS, and provide better services to customers.
    </p>

    <p>
      <strong>Q3: How does IDPR differ from BGP?</strong><br />
      <strong>A:</strong> While BGP focuses on path efficiency and reachability, IDPR emphasizes
      policy enforcement, enabling ISPs to route traffic based on rules such as compliance,
      trust, and performance.
    </p>

    <p>
      <strong>Q4: What are the benefits of IDPR for customers?</strong><br />
      <strong>A:</strong> Customers benefit from reliable connections, faster performance for
      business-critical applications, and compliance with security and data sovereignty laws.
    </p>

    <p>
      <strong>Q5: Where can I get help with IDPR compliance for ISPs?</strong><br />
      <strong>A:</strong> You can contact <span className="font-semibold">Compliances Gurus </span> 
       using the details below.
    </p>
  </div>
</div>


      </div>
    </section>
  )
}
