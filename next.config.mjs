import nextra from 'nextra';

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  // defaultShowCopyCode: true,
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // redirect to /home instead of page.tsx (if i want)
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/resources',
  //       permanent: true,
  //     },
  //   ];
  // },
});
