import Container from '@/components/shared/Container';
import Button from '@/components/shared/ui/Button';
import Input from '@/components/shared/ui/Input';
import TextArea from '@/components/shared/ui/TextArea';

const Contact = () => {
  return (
    <main>
      <Container>
        <div className=' '>
          <div className='my-20 w-[560px]'>
            <div className='mb-10'>
              <h1 className='mb-5 text-4xl font-bold'>Contact Us</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem optio unde omnis facilis,
              </p>
            </div>
            <form className='w-full space-y-4 sm:w-[560px]'>
              <div className='flex gap-10'>
                <Input
                  label='First Name'
                  id='fName'
                  type='text'
                  placeholder='first name'
                />
                <Input
                  label='Last Name'
                  id='lName'
                  type='text'
                  placeholder='last name'
                />
              </div>
              <div className='flex gap-10'>
                <Input
                  label='Email address'
                  id='email'
                  type='email'
                  placeholder='email address'
                />
                <Input
                  label='Phone number'
                  id='phone'
                  type='tel'
                  placeholder='phone number'
                />
              </div>
              <TextArea id='helpText' label='How can I help You' rows={10} />
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

export default Contact;
