export const meta = {
  slug: 'example-role',
  title: 'Example Role',
  location: 'Remote',
  type: 'Full-time',
  applyLink: 'https://example.com/apply',
  // externalLink: 'https://linkedin.com/jobs/...',  // if set, /jobs links here instead of the detail page
};

export default function Content() {
  return (
    <>
      <p>This is a sample job description. Replace this with details about the opportunity and the business.</p>
      <p>Add as many paragraphs, lists, or other elements as you need.</p>

      <h3>Responsibilities</h3>
      <ul>
        <li>Responsibility one</li>
        <li>Responsibility two</li>
        <li>Responsibility three</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>Requirement one</li>
        <li>Requirement two</li>
        <li>Requirement three</li>
      </ul>
    </>
  );
}
