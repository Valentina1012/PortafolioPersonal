import { ContactMail } from '../assets/imgs';
import { ContactButton } from '../components';

export default function Contact() {
  return (
    <section className='h-95.25 py-7 lg:min-h-screen w-full bg-neutral-inverse-primary lg:p-14.5 flex flex-col items-center'>
      <div className='max-w-273.75 my-auto h-75.75 flex flex-col items-center justify-between lg:h-126.75'>
        <p className='text-neutral-disabled font-impact h5-normal lg:h3-normal text-center'>
          Gracias por visitar mi portfolio
        </p>
        <ContactMail />
        <ContactButton />
      </div>
    </section>
  );
}
