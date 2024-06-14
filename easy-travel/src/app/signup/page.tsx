import Container from '@/components/shared/Container';
import Button from '@/components/shared/ui/Button';
import Checkbox from '@/components/shared/ui/Checkbox';
import Input from '@/components/shared/ui/Input';

const Signup = () => {
  return (
    <main>
      <Container>
        <div className='grid h-screen place-items-center'>
          <div className='rounded-md border p-10 shadow-lg'>
            <h1 className='mb-10 text-4xl font-bold'>Create an Account</h1>
            <form className='w-80 space-y-4'>
              <Input
                label='Full Name'
                id='fullName'
                type='text'
                placeholder='Galib rabbani'
              />
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
              <Checkbox id='terms'>
                I have read and agree to the{' '}
                <a href='#'>
                  <b>Terms & Condition</b>
                </a>
              </Checkbox>
              <Button
                isFill={true}
                style={{ display: 'block', width: '100%', marginTop: '2rem' }}
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Signup;
