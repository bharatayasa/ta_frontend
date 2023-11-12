import { getUserLogged } from '../../utils/api';
// import { List, ListItem, Card } from "@material-tailwind/react";

export default function BioDataModal() {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
    });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const { data } = await getUserLogged();
            setUserData({
            username: data.username || '',
            name: data.name || '',
            email: data.email || '',
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        };

        fetchData();
    }, []);

return (
    <div>
        <div>
        <div className="w-96">
            <li>
                <h1>tes data</h1>
            </li>
        </div>
        </div>
    </div>
);
}
