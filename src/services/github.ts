const getGithubProfileImageUrl = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/subho-1011`);

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.avatar_url;
  } catch (error) {
    console.log(`Unable to retrieve avatar`);
  }
};

export { getGithubProfileImageUrl };
