import PropTypes from 'prop-types';

PageContent.propTypes = {
  children: PropTypes.any,
};

function PageContent({ children }) {
  return (
    <>
      <div className="bg-white dark:bg-gray-300 text-black p-5">{children}</div>
    </>
  );
}

export default PageContent;
