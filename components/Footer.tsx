import Image from "next/image";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-[#061F13] font-['SF_Pro_Text']">
      <div className="flex flex-row justify-between px-5 sm:px-10 border-b-[0.01px] pb-5 border-b-neutral-500 pt-8">
        <Image src="/logowhite.svg" alt="logo" width={100} height={100} />
        <div className="flex flex-col sm:flex-row gap-3 text-white text-xs">
          <p>Status</p>
          <p>Form ADV Part 2A</p>
          <p>Terms</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="text-xs flex flex-col gap-4 text-[#74746A]  px-5 sm:px-10 mt-4 text-justify">
        <p>
          Vesto Advisors, LLC (“Vesto”) is an SEC registered investment adviser.
          Registration with the SEC does not imply a certain level of skill or
          training, or that the SEC has approved of the services of the
          investment adviser.
        </p>
        <p>
          *All yield figures cited represent hypothetical performance based on
          forward-looking assumptions, and do not reflect actual performance
          achieved by a Vesto Customer in the past. Actual earnings on idle or
          invested cash are dependent upon a multitude of factors, including but
          not limited to interest rates, timing of trades, inclusion of
          earnings, impact of fees, and other factors outside of our control.
          Any potential earnings on idle cash are also dependent upon each
          Customer and Potential Customer’s specific situation and
          circumstances, and that as these change over time, so will the impact
          on potential earnings on invested cash.
        </p>
        <p>
          The material presented is for informational purposes only and should
          not be construed as investment advice. It is not a recommendation of,
          or an offer to sell or solicitation of an offer to buy, any particular
          security, strategy or investment product. Investing in securities
          involves risks, including the potential loss of money, and past
          performance does not guarantee future results. Historical returns,
          expected returns, and probability projections are provided for
          informational and illustrative purposes, and may not reflect actual
          future performance. Product images shown are for informational and
          illustrative purposes only, and may not reflect how they will actually
          appear within the product. Nothing on this web site should be
          construed as personalized investment advice, which can only be
          provided in one-on-one communications. Investments in securities are
          Not FDIC insured, Not Bank Guaranteed, and May Lose Value. Investing
          involves risk, including the possible loss of principal. Before
          investing, consider your investment objectives and the fees and
          expenses charged by Vesto.
        </p>
        <p>
          The materials and services presented on this Website are directed to
          Customers and Potential Customers who are small and mid-sized business
          entities in the United States of America. Vesto does not solicit nor
          advise retail or foreign investors. Customers mentioned above are not
          affiliated with Vesto Advisors, LLC, and unless specifically
          disclosed, do not represent any act of solicitation or testimonial on
          behalf of Vesto.
        </p>
        <p>
          For accounts opened on or after 02/21/2024, Brokerage services are
          provided by Atomic Brokerage, LLC (“Atomic Brokerage”), a registered
          broker-dealer. Custody and clearing services are provided to Atomic
          Brokerage by Pershing LLC, a part of the Bank of New York Mellon. Both
          are members of FINRA and SIPC. For more details about Atomic
          Brokerage, please see their Form CRS, the Atomic Brokerage General
          Disclosures, and the Privacy Policy. Check the background of Atomic
          Brokerage on FINRA’s BrokerCheck. Additional technology services may
          be provided by AtomicVest, Inc. (“AtomicVest”). Neither Atomic
          Brokerage nor AtomicVest are banks.
        </p>
        <p>
          For accounts opened prior to 02/21/2024, Brokerage services are
          provided by Pershing Advisor Solutions LLC (“PAS”), a part of the Bank
          of New York Mellon, and a registered broker-dealer. Custody and
          clearing services are provided by Pershing LLC, a part of the Bank of
          New York Mellon. Both are members of FINRA and SIPC. Vesto has a
          sub-advisory relationship with Atomic Invest LLC ("Atomic Invest"), an
          SEC-registered investment advisor, to enable access to the PAS and
          Pershing platforms, and to help execute investments on behalf of its
          customers. Atomic Invest is not a bank.
        </p>
        <p>
          † SIPC insurance protects against the loss of cash and securities held
          by a customer at a financially-troubled SIPC-member brokerage firm.
          The limit of SIPC protection is $500,000, which includes a $250,000
          limit for cash. SIPC does not protect against the decline in value of
          your securities, or losses due to bad or inappropriate investment
          advice. More information is available on the www.sipc.org. Customers
          may additionally opt into two additional FDIC sweep products,
          available through BNY Mellon's partner bank network and through R&T
          Deposit Solutions, providing $2.5M in extended FDIC insurance each
          ($5M in total insurance). FDIC coverage through BNY Mellon, member
          FDIC, protects against the loss of cash deposits held by a customer in
          the event an FDIC member bank fails. FDIC insurance covers all types
          of deposits at an insured bank but does not cover investments, even if
          they were purchased at an insured bank. More information is available
          on www.fdic.gov.
        </p>
        <p>
          © {date} Vesto Advisors, LLC, a wholly owned subsidiary of Vesto
          Financial, Inc. based at 156 5th Ave Ste 1218, New York NY 10016 USA.
        </p>
      </div>
    </div>
  );
};
export default Footer;
