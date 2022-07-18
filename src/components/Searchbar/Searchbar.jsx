import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Header,
  SearchForm,
  FormBtn,
  SpanForm,
  InputForm,
  ImgForm,
  Error,
  ErrorStatus,
} from './Searchbar.styled';

let schema = yup.object().shape({
  searchValue: yup.string(),
});

export const Searchbar = ({ onSubmit, errorStatus }) => {
  const hendleSubmit = (values, { resetForm }) => {
    onSubmit(values.searchValue);
    resetForm();
  };
  return (
    <Header>
      <Formik
        initialValues={{ searchValue: '' }}
        onSubmit={hendleSubmit}
        validationSchema={schema}
      >
        <SearchForm>
          <FormBtn type="submit">
            <ImgForm />
            <SpanForm>Search</SpanForm>
          </FormBtn>

          <InputForm
            autoComplete="off"
            type="text"
            name="searchValue"
            placeholder="Search images and photos"
          />
          <Error name="searchValue" component="div" />
          {errorStatus !== '' && <ErrorStatus> {errorStatus}</ErrorStatus>}
        </SearchForm>
      </Formik>
    </Header>
  );
};
