import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import styles from "../../styles/RecipeCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Upload from "../../assets/upload.jpeg";
import { useRedirect } from "../../hooks/useRedirect";
import useAlert from "../../hooks/useAlert";

function RecipeCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split("T")[0];
  const { setAlert } = useAlert();

  const [recipeData, setRecipeData] = useState({
    recipe_title: "",
    image: "",
    recipe_description: "",
    ingredients: "",
    cooking_time: "",
    difficulty: "",
    servings: "",
    calories: "",
    recipe_preparation: "",
  });
  const {
    recipe_title,
    image,
    recipe_description,
    ingredients,
    cooking_time,
    difficulty,
    servings,
    calories,
    recipe_preparation,
  } = recipeData;

  const imageInput = useRef(null);
  const history = useHistory();

  // For input changes handle
  const handleChange = (event) => {
    setRecipeData({
      ...recipeData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setRecipeData({
        ...recipeData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // History back navigation
  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack();
  };

  // Function for handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("recipe_title", recipe_title);
    formData.append("image", imageInput.current.files[0]);
    formData.append("recipe_description", recipe_description);
    formData.append("ingredients", ingredients);
    formData.append("cooking_time", cooking_time);
    formData.append("difficulty", difficulty);
    formData.append("servings", servings);
    formData.append("calories", calories);
    formData.append("recipe_preparation", recipe_preparation);

    try {
      const { data } = await axiosReq.post("/recipes/", formData);
      history.push(`/recipes/${data.id}`);
      setAlert("Recipe Created!", "success");
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mb-5 mt-4">
      <Form onSubmit={handleSubmit}>
        <Container
          className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
        >
          <Form.Group controlId="recipe_title">
            <div className="d-flex justify-content-center">
              <Form.Label>Recipe Title</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add recipe title"
              type="text"
              name="recipe_title"
              value={recipe_title}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.recipe_title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group className="text-center">
            {image ? (
              <>
                <figure>
                  <Image className={appStyles.Image} src={image} rounded />
                </figure>
                <div>
                  <Form.Label
                    className={`${styles.Submit} ${btnStyles.Blue} btn`}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click or tap to upload an image" />
              </Form.Label>
            )}

            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              ref={imageInput}
            />
          </Form.Group>

          <Form.Group controlId="recipe_description">
            <div className="d-flex justify-content-center">
              <Form.Label>Recipe Description</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add recipe description"
              type="text"
              name="recipe_description"
              value={recipe_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.recipe_description?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="ingredients">
            <div className="d-flex justify-content-center">
              <Form.Label>Ingredients</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add ingredients"
              type="text"
              name="ingredients"
              value={ingredients}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.ingredients?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="cooking_time">
            <div className="d-flex justify-content-center">
              <Form.Label>Cooking Time</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add cooking time"
              type="text"
              name="cooking_time"
              value={cooking_time}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.cooking_time?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="difficulty">
            <div className="d-flex justify-content-center">
              <Form.Label>Difficulty</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add difficulty"
              type="text"
              name="difficulty"
              value={difficulty}
              onChange={handleChange}
              min="0"
            />
          </Form.Group>
          {errors?.difficulty?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="servings">
            <div className="d-flex justify-content-center">
              <Form.Label>Servings</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add servings"
              type="text"
              name="servings"
              value={servings}
              onChange={handleChange}
              min="0"
            />
          </Form.Group>
          {errors?.servings?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="calories">
            <div className="d-flex justify-content-center">
              <Form.Label>Calories</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add calories"
              type="text"
              name="calories"
              value={calories}
              onChange={handleChange}
              min="0"
            />
          </Form.Group>
          {errors?.calories?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="recipe_preparation">
            <div className="d-flex justify-content-center">
              <Form.Label>Recipe Preparation</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              placeholder="Add recipe preparation"
              type="text"
              name="recipe_preparation"
              value={recipe_preparation}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.recipe_preparation?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Container>

        <div className="d-flex justify-content-center">
          <Button
            className={`${styles.Submit} ${btnStyles.Button}`}
            onClick={handleCancel}
          >
            cancel
          </Button>
          <Button
            className={`${styles.Submit} ${btnStyles.Button}`}
            type="submit"
          >
            create
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default RecipeCreateForm;
