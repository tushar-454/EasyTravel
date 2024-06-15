import Container from '@/components/shared/Container';
import Button from '@/components/shared/ui/Button';
import Input from '@/components/shared/ui/Input';

const Login = () => {
  return (
    <main>
      <Container>
        <div className='grid h-screen place-items-center'>
          <div className='rounded-md border p-10 shadow-lg'>
            <h1 className='mb-10 text-4xl font-bold'>Log in</h1>
            <form className='w-full space-y-4 sm:w-80'>
              <Input
                label='Email or Phone Number'
                id='emailPhone'
                type='text'
                placeholder='email or phone number'
              />
              <Input
                label='Password'
                id='password'
                type='password'
                placeholder='enter your password'
                isPassField={true}
              />
              <Button
                isFill={true}
                style={{ display: 'block', width: '100%', marginTop: '2rem' }}
              >
                Log in
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Login;
