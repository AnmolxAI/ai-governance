'use client';

export default function SubstackSubscription() {
  return (
    <div className="substack-subscription-wrapper">
      <p className="subscribe-text">Subscribe to the newsletter</p>
      <div className="substack-subscription">
        <iframe
          src="https://aigovernancetoday.substack.com/embed"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
          title="Subscribe to AI Governance Today"
          className="substack-iframe"
        ></iframe>
      </div>
    </div>
  );
}

