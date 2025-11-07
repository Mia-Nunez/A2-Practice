// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/A2-Practice/my-admin/ra-trailbase.js";
import { BookEdit, BookList } from "./assets/Tables/BOOK";
import { OrderEdit, OrderList } from "./assets/Tables/ORDERS";
import { PublisherEdit, PublisherList } from "./assets/Tables/PUBLISHER";
import { RequestEdit, RequestList } from "./assets/Tables/REQUEST";
import { StudentEdit, StudentList } from "./assets/Tables/STUDENT";

const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/" // enter link from Ale
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="BOOK" list={BookList} edit={BookEdit}/>
    {/*<Resource name="BOOK_REQUEST" list={} edit={EditGuesser} /> */}
    <Resource name="ORDERS" list={OrderList} edit={OrderEdit}/>
    <Resource name="PUBLISHER" list={PublisherList} edit={PublisherEdit}/>
    <Resource name="REQUEST" list={RequestList} edit={RequestEdit}/>
    <Resource name="STUDENT" list={StudentList} edit={StudentEdit}/>
  </Admin>
);

export default App;