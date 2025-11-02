'use client';

export default function SubstackSubscription() {
  return (
    <div className="substack-subscription">
      <iframe
        src="https://aigovernancetoday.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: '1px solid #EEE', background: 'white' }}
        frameBorder="0"
        scrolling="no"
        title="Subscribe to AI Governance Today"
      ></iframe>
    </div>
  );
}

