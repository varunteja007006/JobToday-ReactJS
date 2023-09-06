import PropTypes from 'prop-types';

PageTitle.propTypes = {
  title: PropTypes.string,
};

function PageTitle({ title }) {
  return <h2 className="text-2xl py-1 mb-2">{title}</h2>;
}

export default PageTitle;
