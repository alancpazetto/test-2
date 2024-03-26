import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@test-2/login'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return <Login />;
}
