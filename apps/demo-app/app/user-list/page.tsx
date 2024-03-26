import dynamic from 'next/dynamic';

const UserList = dynamic(() => import('@test-2/user/user-list'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <UserList />;
}
