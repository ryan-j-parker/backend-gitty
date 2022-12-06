const exchangeCodeForToken = async (code) => {
  // eslint-disable-next-line no-console
  console.log(`CALLING MOCK exchangeCodeForToken! ${code}`);
  return 'MOCK TOKEN FOR CODE';
};

const getGithubProfile = async (token) => {
  // eslint-disable-next-line no-console
  console.log(`CALLING MOCK getGithubProfile ${token}`);
  return {
    login: 'fictitious',
    email: 'test@useremail.net',
    avatar_url: 'http://placekitten.com/200/300',
  };
};

module.exports = { exchangeCodeForToken, getGithubProfile };
