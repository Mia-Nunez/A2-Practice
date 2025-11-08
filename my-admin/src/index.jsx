// in src/admin/index.tsx
import { Admin, Resource, ListGuesser, EditGuesser, radiantLightTheme } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/A2-Practice/my-admin/ra-trailbase.js";
import { BookEdit, BookList, BookCreate} from "./assets/Tables/BOOK";
import { OrderEdit, OrderList, OrderCreate } from "./assets/Tables/ORDERS";
import { PublisherEdit, PublisherList, PublisherCreate } from "./assets/Tables/PUBLISHER";
import { RequestEdit, RequestList, RequestCreate } from "./assets/Tables/REQUEST";
import { StudentEdit, StudentList, StudentCreate } from "./assets/Tables/STUDENT";

const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/" // enter link from Ale
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} theme={radiantLightTheme}>
    <Resource name="BOOK" list={BookList} edit={BookEdit} create={BookCreate}/>
    {/*<Resource name="BOOK_REQUEST" list={} edit={EditGuesser} /> */}
    <Resource name="ORDERS" list={OrderList} edit={OrderEdit} create={OrderCreate}/>
    <Resource name="PUBLISHER" list={PublisherList} edit={PublisherEdit} create={PublisherCreate}/>
    <Resource name="REQUEST" list={RequestList} edit={RequestEdit} create = {RequestCreate}/>
    <Resource name="STUDENT" list={StudentList} edit={StudentEdit} create = {StudentCreate}/>
  </Admin>
);

export default App;