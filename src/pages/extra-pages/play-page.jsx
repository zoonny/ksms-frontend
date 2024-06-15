import { Input, Stack, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import useSWR from 'swr';
import usePost from './usePost';

// const Card1 = () => {
//   const fetcher = (...args) => fetch(...args).then((response) => response.json());
//   const { data, error, isLoading } = useSWR(`${ROOT_URL}/posts/1`, fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <MainCard title="Post">
//       <h2>{data.title}</h2>
//       <Typography>{data.body}</Typography>
//     </MainCard>
//   );
// };

const Card1 = () => {
  const { post, error, isLoading } = usePost(1);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <MainCard title="Post">
      <h2>{post.title}</h2>
      <Typography>{post.body}</Typography>
    </MainCard>
  );
};

const Card2 = () => {
  const { post, error, isLoading } = usePost(1);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <MainCard title="Post">
      <h2>{post.title}</h2>
      <Typography>{post.body}</Typography>
    </MainCard>
  );
};

const PlayPage = () => {
  return (
    <Stack direction={'column'} spacing={2}>
      <Card1 />
      <Card2 />
    </Stack>
  );
};

export default PlayPage;
