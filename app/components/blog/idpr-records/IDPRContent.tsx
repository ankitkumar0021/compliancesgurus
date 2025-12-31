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
          <p className="text-gray-700 mb-4 leading-relaxed">
            IDPR records are data sets that contain information about:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>The path a packet should follow across domains</li>
            <li>Policy constraints (e.g., avoid regions, prioritize low latency)</li>
            <li>Authentication and validation data</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            ISPs rely on these records to ensure compliance with inter-ISP agreements,
            transparent service-level commitments, and improved customer trust.
          </p>
        </div>

        {/* Benefits for Customers */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Benefits of IDPR for ISP Customers
          </h2>
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

          <div className="space-y-4 text-gray-700">
            <p><strong>Q1:</strong> What is IDPR in networking?<br />
              <strong>A:</strong> IDPR enables ISPs to route traffic based on security, compliance,
              and performance policies.</p>

            <p><strong>Q2:</strong> Why are IDPR records important for ISPs?<br />
              <strong>A:</strong> They help enforce routing policies, improve security, and enhance QoS.</p>

            <p><strong>Q3:</strong> How does IDPR differ from BGP?<br />
              <strong>A:</strong> BGP focuses on efficiency, while IDPR emphasizes policy enforcement.</p>

            <p><strong>Q4:</strong> What are the benefits of IDPR for customers?<br />
              <strong>A:</strong> Reliable connections, better performance, and regulatory compliance.</p>

            <p><strong>Q5:</strong> Where can I get help with IDPR compliance?<br />
              <strong>A:</strong> You can contact <span className="font-semibold">Compliances Gurus</span> for expert assistance.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
