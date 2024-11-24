/* eslint-disable react/prop-types */
import './App.css';
import { useState } from 'react';
import DatePicker from './DatePicker';
import Carousel from './HorizontalSnapScroll-1/Carousel';

const Banner = ({ banner }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${banner?.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        position: 'relative',
      }}
    >
      <div className="banner-info-overlay">
        <h2 className="banner-title">{banner?.title}</h2>
        <p className="banner-description">{banner?.description}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({ dob: { message: '' } });

  const handleDOBChange = (value) => {
    setDob(value);
    console.log('the value is: ', value);
    if (errors.dob?.message) {
      setErrors({ dob: { message: '' } });
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!dob) {
      setErrors({ dob: { message: 'Date of Birth is required' } });
      isValid = false;
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(dob);

      if (selectedDate > currentDate) {
        setErrors({ dob: { message: 'Date of Birth cannot be in the future' } });
        isValid = false;
      }
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const isValid = validateForm();
  };
  // const images = [
  //   'https://via.placeholder.com/800x400/ff5733/fff',
  //   'https://via.placeholder.com/800x400/33ff57/fff',
  //   'https://via.placeholder.com/800x400/5733ff/fff',
  // ];
  const bannerList = [
    {
      id: 1,
      title: 'Explore the World',
      description: 'Discover amazing destinations with exclusive travel deals.',
      imageUrl: 'https://via.placeholder.com/800x400/ff5733/fff',
    },
    {
      id: 2,
      title: 'Adventure Awaits',
      description: 'Gear up for thrilling adventures across the globe.',
      imageUrl: 'https://via.placeholder.com/800x400/33ff57/fff',
    },
    {
      id: 3,
      title: 'Luxury Redefined',
      description: 'Experience premium stays and services at luxurious resorts.',
      imageUrl: 'https://via.placeholder.com/800x400/5733ff/fff',
    },
  ];

  return (
    <>
      <div className="bg-[#2E3846] mb-10">
        <svg
          width="102"
          height="42"
          viewBox="0 0 102 42"
          fill="none"
          className="ml-10 size-16 sm:size-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.2184 2.91954L31.8161 0L21.5172 12.069L23.7931 2.94253L23.8161 2.91954L20.3908 0L10.1149 12.046L12.3908 2.91954L8.98851 0L0 10.5057L3.42529 13.4253L5.83908 10.5977L3.56322 19.7241L6.96552 22.6437L17.2414 10.6207L14.9425 19.7241H14.9655L18.3908 22.6437L28.6667 10.5977L26.3678 19.7241L30.2759 22.6437L35.2184 2.91954Z"
            fill="#21D685"
          ></path>
          <path
            d="M55.6325 0L45.3337 12.046L47.6325 2.91954L44.2073 0L35.2188 10.5057L38.644 13.4253L41.0578 10.5977L38.782 19.7241L42.2073 22.6437L47.4256 16.5057L36.4601 38.6437L40.1153 41.3563L59.1498 3.01149L55.6325 0Z"
            fill="#21D685"
          ></path>
          <path
            d="M59.1504 11.3098C59.1504 9.93052 59.4492 8.59718 60.0469 7.33282C60.6446 6.06845 61.4492 4.965 62.4607 4.02247C63.4722 3.07994 64.6676 2.29833 66.0469 1.72362C67.4263 1.14891 68.8745 0.873047 70.3918 0.873047C71.84 0.873047 73.0814 1.10293 74.1389 1.53971C75.1964 1.9765 76.0699 2.45925 76.7826 3.01098C77.6102 3.63167 78.2998 4.34431 78.8515 5.12592L75.2423 8.64316C74.8975 8.1604 74.4837 7.70063 74.024 7.33282C73.6332 7.01098 73.1274 6.68914 72.5067 6.41328C71.886 6.11443 71.1734 5.9765 70.3918 5.9765C69.6561 5.9765 68.9665 6.11443 68.2998 6.39029C67.6331 6.66615 67.0584 7.05695 66.5297 7.53971C66.024 8.02247 65.6102 8.59719 65.3113 9.24086C65.0125 9.88454 64.8745 10.5742 64.8745 11.3098C64.8745 12.0455 65.0125 12.7351 65.3113 13.3788C65.6102 14.0225 66.001 14.5972 66.5297 15.0799C67.0354 15.5627 67.6331 15.9535 68.2998 16.2294C68.9665 16.5052 69.6561 16.6432 70.3918 16.6432C71.1734 16.6432 71.886 16.5052 72.5067 16.2524C73.1274 15.9995 73.6561 15.7006 74.1159 15.4018C74.6217 15.034 75.0814 14.5972 75.4722 14.1144L78.8745 17.4937C78.2998 18.2753 77.6102 18.988 76.8056 19.6087C76.0929 20.1374 75.2194 20.6432 74.1619 21.0799C73.1044 21.5167 71.863 21.7466 70.4148 21.7466C68.8975 21.7466 67.4492 21.4707 66.0699 20.896C64.6906 20.3213 63.4952 19.5627 62.4837 18.5972C61.4722 17.6547 60.6676 16.5282 60.0699 15.2868C59.4492 14.0225 59.1504 12.7121 59.1504 11.3098Z"
            fill="white"
          ></path>
          <path
            d="M95.3678 12.4483L87.8046 16.8161C87.023 17.2759 86.0575 16.7011 86.0575 15.8046V7.06897C86.0575 6.17241 87.023 5.5977 87.8046 6.05747L95.3678 10.4253C96.1494 10.8621 96.1494 11.9885 95.3678 12.4483ZM100.126 7.45977C99.5287 6.1954 98.7241 5.09195 97.7356 4.14943C96.7241 3.2069 95.5517 2.42529 94.2184 1.85057C92.8851 1.27586 91.4598 1 90.0115 1C88.5172 1 87.092 1.27586 85.7816 1.85057C84.4483 2.42529 83.2988 3.18391 82.2874 4.14943C81.2759 5.11494 80.4943 6.21839 79.8966 7.45977C79.2988 8.72414 79 10.0345 79 11.4368C79 12.8161 79.2988 14.1494 79.8966 15.4138C80.4943 16.6782 81.2988 17.7816 82.2874 18.7241C83.2988 19.6897 84.4483 20.4483 85.7816 21.023C87.1149 21.5977 88.5172 21.8736 90.0115 21.8736C91.4828 21.8736 92.8851 21.5977 94.2184 21.023C95.5517 20.4483 96.7241 19.6897 97.7356 18.7241C98.7471 17.7816 99.5287 16.6552 100.126 15.4138C100.724 14.1494 101.023 12.8391 101.023 11.4368C101 10.0345 100.701 8.70115 100.126 7.45977Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <p className="text-center text-3xl font-semibold mb-10">
        Assignment done by: Zafar Khan
      </p>
      <div className="bg-[#182232] rounded-lg mx-4 lg:mx-10 p-5 lg:p-10">
        <p className="text-white">
          Date Picker is able to perform following things:
        </p>
        <ul className="list-disc list-inside text-white mb-5">
          <li>It is able to show the date picker (html5 datepicker)</li>
          <li>
            It is able to show the error message when the date is not selected and
            the form is submitted , you can click on the submit button without adding
            any date and the message will show.
          </li>
          <li>You wont be able to select a future date.</li>
          <li>
            Label can be styled as well as two modes or size for label available as
            well which is medium by default , small and large
          </li>
          <li>
            Input can be styled as well like background color padding etc . using
            inputClassName.
          </li>
          <li>
            Below is a simple form on error it will show error on success it will
            perform nothing
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <DatePicker
            label="Date of Birth"
            onChange={handleDOBChange}
            labelVariant="large"
            //inputClassName="bg-green-600"
            labelClassName="text-white"
            error={!!errors.dob?.message?.length}
            errorMessage={errors.dob?.message}
            placeholder="DATE OF BIRTH"
          />
          <button
            type="submit"
            className="bg-[#21D685] mt-10 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="my-20">
        <p className="px-10 text-black">
          Carousel is able to perform following things:
        </p>
        <ul className="list-disc list-inside px-10 text-black mb-5">
          <li>
            The carousel dynamically renders banners, each with a background image
            and additional information, using the <code>Banner</code> component.
          </li>
          <li>
            It supports automatic scrolling with a customizable delay using the{' '}
            <code>autoScrollDelay</code> prop (default: 3500ms).
          </li>
          <li>
            The carousel pauses auto-scrolling when the user hovers over it and
            resumes when the mouse leaves.
          </li>
          <li>
            Users can navigate through slides manually using previous and next
            buttons or click on the indicators below the carousel.
          </li>
          <li>
            Fully responsive design with configurable aspect ratios for various
            screen sizes using Tailwind CSS classes like{' '}
            <code>aspect-[107/125]</code>.
          </li>
          <li>
            Allows optional fullscreen mode, which can be enabled with the{' '}
            <code>fullScreen</code> prop.
          </li>
          <li>
            Supports hiding navigation controls (buttons and indicators) using the{' '}
            <code>hideControlls</code> prop.
          </li>
          <li>
            Each banner can display a title and description overlay on the background
            image.
          </li>
          <li>
            Content inside the carousel is scrollable, ensuring smooth transitions
            between slides.
          </li>
          <li>
            <code>infoChildren</code>, the component mentioned in the document is
            replaced by the Banner component which perform the same functionality
          </li>
        </ul>
        <Carousel
          totalChildren={bannerList.length}
          className="aspect-[16/9]"
          fullScreen={false}
          hideControlls={false}
          autoScrollDelay={3000}
          key="unique-carousel-key"
        >
          {bannerList.map((banner) => (
            <Banner
              key={banner.id}
              banner={banner}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default App;
