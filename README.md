# outthereand.com
OutThere&amp;

### Build
`npm run dev`
`npm run deploy`

### Local development
Disable GPG signing: `git config --global commit.gpgsign false`

### Adding a job listing

1. Create a new file in `src/jobs/` named after the role, e.g. `src/jobs/sales-director.jsx`

```jsx
export const meta = {
  slug: 'sales-director',       // sets the URL: /job/sales-director
  title: 'Sales Director',
  location: 'Los Angeles, CA',  // optional
  type: 'Full-time',            // optional
  applyLink: 'https://...',
  // externalLink: 'https://linkedin.com/jobs/...',  // optional — if set, the /jobs listing links here instead of the detail page
};

export default function Content() {
  return (
    <>
      <p>Description of the role...</p>

      <h3>Responsibilities</h3>
      <ul>
        <li>Item one</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>Item one</li>
      </ul>
    </>
  );
}
```

2. Register the job in `src/jobs/index.js`:

```js
import * as SalesDirector from './sales-director';

const jobs = {
  [ExampleRole.meta.slug]: ExampleRole,
  [SalesDirector.meta.slug]: SalesDirector,
};
```

The listing will be live at `/job/sales-director` (or whatever slug you set).