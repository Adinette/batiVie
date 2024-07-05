
export async function getStaticProps({ params }) {
    const data = await fetchData(params.id); 
  
    if (shouldRedirect) {
      return {
        redirect: {
          destination: '/', // Replace with your redirect path
          permanent: false, // Set to true for permanent redirects
        },
      };
    }
  
    // If no redirect is needed, return data for the page
    return {
      props: {
        data,
      },
    };
  }
  