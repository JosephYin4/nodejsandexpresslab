/* 1. SETUP EXPRESS */
let app = express();
// 1B. SETUP VIEW ENGINE
app.set('view engine', 'hbs');
// 1C. SETUP STATIC FOLDER
app.use(express.static('public'));