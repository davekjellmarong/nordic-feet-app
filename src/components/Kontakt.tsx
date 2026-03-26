export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="bg-[#f4f6fa] py-20 px-4"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4EA8DE]">
            Kontakt
          </p>
          <h2
            id="kontakt-heading"
            className="mb-10 text-3xl font-extrabold tracking-tight text-[#1B3A6B] sm:text-4xl"
          >
            Ta kontakt
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <ContactItem
              icon={
                <PhoneIcon />
              }
              label="Telefon"
            >
              <a
                href="tel:97422814"
                className="text-[#1B3A6B] font-semibold hover:text-[#4EA8DE] transition-colors"
              >
                974 22 814
              </a>
            </ContactItem>

            <ContactItem icon={<EmailIcon />} label="E-post">
              <a
                href="mailto:nordicfeetfk@gmail.com"
                className="text-[#1B3A6B] font-semibold hover:text-[#4EA8DE] transition-colors break-all"
              >
                nordicfeetfk@gmail.com
              </a>
            </ContactItem>

            <ContactItem icon={<InstagramIcon />} label="Instagram">
              <a
                href="https://instagram.com/nordicfeet_fk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A6B] font-semibold hover:text-[#4EA8DE] transition-colors"
              >
                @nordicfeet_fk
              </a>
            </ContactItem>

            <ContactItem icon={<FacebookIcon />} label="Facebook">
              <a
                href="https://facebook.com/NordicFeetFotklinikk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B3A6B] font-semibold hover:text-[#4EA8DE] transition-colors"
              >
                Nordic Feet Fotklinikk
              </a>
            </ContactItem>

            <ContactItem icon={<LocationIcon />} label="Adresse">
              <span className="text-[#1B3A6B] font-semibold">
                Henrik Steffens Gate 8, 4008 Stavanger
              </span>
            </ContactItem>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Nordic Feet Fotklinikk kart"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2050.8!2d5.734!3d58.971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a35cf9e6e2e6b%3A0x0!2sHenrik+Steffens+gate+8%2C+4008+Stavanger!5e0!3m2!1sno!2sno!4v1"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1B3A6B] text-white"
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#4EA8DE]">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
