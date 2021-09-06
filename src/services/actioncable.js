import { createConsumer } from "@rails/actioncable";

export default createConsumer(`${process.env.REACT_APP_API_URL}/cable`);
