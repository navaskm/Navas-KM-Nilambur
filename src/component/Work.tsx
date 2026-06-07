import { motion } from 'motion/react';
import Image from 'next/image';

const workData = [
  {
    title: 'E-commerce App',
    description: 'E-commerce App with Next.js 15 and Clerk Auth',
    bgImage: '/work/e-commerce.avif',
    link: 'https://e-commerce-app-henna-nu.vercel.app'
  }, {
    title: 'Employee Management System',
    description: 'Role-based task management app using Next.js and Redux',
    bgImage: '/work/emplyee-managment.avif',
    link: 'https://employee-management-system-three-theta.vercel.app/'
  }, {
    title: 'Portfolio Project',
    description: 'Web Design Portfolio for Graphic Designer',
    bgImage: '/work/portfolio.avif',
    link: 'https://midhun-krishna-k.vercel.app/'
  },
  {
    title: 'Smart Expense Tracker',
    description: 'Created expense tracking app using Cursor AI.',
    bgImage: '/work/expense-tracker.avif',
    link: 'https://navaskm.github.io/expence-traker/'
  },
  {
    title: 'Finance dashboard',
    description: "Interactive financial dashboard built with modern UI to visualize data, track performance, and display insights using responsive design and clean user interfaces.",
    bgImage: '/work/finance-dashboard.png',
    link: 'https://finance-dashboard-ui-ochre-nu.vercel.app/'
  },
  {
    title: 'Product Management',
    description: 'Product management system with features to add, edit, delete, and search products, along with toggle views between table and grid layouts for better user experience.',
    bgImage: '/work/product-mange.jpg',
    link: 'https://product-management-roan-beta.vercel.app/'
  },
]

const blueWebProjects = [
  {
    title: "Yaspn Portfolio Website",
    des: 'Professional portfolio website developed for a Dubai-based business owner. Focused on responsive design, modern UI, and user experience.',
    link: 'https://yaspn.com',
    bgImage: '/work/yaspn.jpg',
  },
  {
    title: "E-commerce Application", 
    des: 'Modern e-commerce platform featuring product listings, shopping cart, responsive layouts, and user-friendly shopping experience. The project is currently under development and will be launched soon.',
    link: 'https://ecommerce-website-khaki-mu.vercel.app/',
    bgImage: '/work/blue-web-ecommerce.jpeg',
  }
]

const Work = () => {

  const handleProject = (Link: string) => {
    window.open(Link, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      aria-labelledby="Work's of Navas KM Nilambur Frontend Developer"
      className="w-full pt-20 pb-1 scroll-mt-20 bg-[rgba(6,10,32,1)]"
    >

      <div className='max-w-[1500px] mx-auto px-5 lg:px-8'>
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg">My portfolio</motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl">My latest work</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
        </motion.p>

        {/* Internship Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:my-20"
        >

          {/* Left Side */}
          <div className="bg-[rgba(10,16,48,1)] border border-white/10 rounded-2xl p-3.5 lg:p-8">
            <h3 className="text-3xl font-semibold mb-4">
              Internship Experience
            </h3>

            <p className="text-gray-300 leading-6">
              During my internship at Blue Web Two, I worked on real-world client
              projects and collaborated with experienced developers to improve my
              frontend development skills. This experience helped me gain practical
              knowledge of modern web technologies, responsive design, project
              structure, and professional development workflows.
            </p>

            <p className="text-gray-300 leading-6 mt-4">
              I contributed to portfolio and e-commerce projects using modern
              frontend technologies while following industry best practices and
              client requirements.
            </p>

            <div className="mt-6">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs lg:text-sm">
                Blue Web Two • Frontend Developer Intern
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-5">

            {/* company */}
            {blueWebProjects.map( project => (
              <div
               key={project.title}
                onClick={() => handleProject(project.link)}
                className="bg-[rgba(10,16,48,1)] border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-blue-400 duration-300 relative overflow-hidden"
              >

                <img
                  src={project.bgImage}
                  alt={`${project.title} project by Navas KM`}
                  className='absolute w-full h-full inset-0 z-0'
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(10,16,48,1)]/60 z-0"></div>

                <div className='relative z-10'>
                  <h4 className="text-xl font-semibold ">{project.title}</h4>
                  <p className="text-gray-300 mt-2 leading-5 text-sm">{project.des}</p>
                  <span className="inline-block mt-8 text-blue-400">
                    View Project →
                  </span>
                </div>
              </div>
            ))}

          </div>

        </motion.div>

        <h5 className='text-center mt-5 lg:mt-0'>My personal projects</h5>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={`grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] mt-3 mb-10 gap-5`}>

          {workData.map((project, index) => (
            <motion.article
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden'
              onClick={() => handleProject(project.link)}
            >

              {/* Hidden SEO Image */}
              <Image
                height={30}
                width={30}
                src={project.bgImage}
                alt={`${project.title} project by Navas KM`}
                className="hidden"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[rgba(10,16,48,1)]/60 group-hover:bg-[rgba(10,16,48,1)]/40 transition duration-300"></div>

              {/* Content */}
              <div className='absolute inset-0 z-10 p-4 flex flex-col justify-end'>

                {/* text */}
                <div className="max-w-full">
                  <h2 className='font-semibold text-white text-sm sm:text-base truncate'>
                    {project.title}
                  </h2>

                  <p className='text-xs sm:text-sm text-gray-300 group-hover:text-white line-clamp-2'>
                    {project.description}
                  </p>
                </div>

                {/* button */}
                <div className='mt-3 flex justify-end'>
                  <div className='rounded-full w-9 aspect-square flex items-center justify-center 
                    transition-all duration-300 bg-white/40 group-hover:bg-white'>
                    <Image
                      height={30}
                      width={30}
                      src="/work/send-icon.png"
                      alt={`${project.title} project by Navas KM`}
                      className='w-4'
                    />
                  </div>
                </div>
              </div>

            </motion.article>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          href="https://github.com/navaskm"
          target='_blank'
          rel="noopener noreferrer"
          aria-label="Visit Navas KM GitHub profile"
          className="w-max flex items-center justify-center gap-2 text-white border-[0.5px] border-white rounded-full py-3 px-10 mx-auto my-20 duration-500"
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(96,165,250,0.4)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          Show more
          <img
            src="/work/right-arrow-bold-dark.png"
            alt='arrow icon'
            className='w-4'
          />
        </motion.a>
      </div>

    </motion.section>
  )
}

export default Work