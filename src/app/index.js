import { StatusBar } from 'expo-status-bar';
import {
  Image,
  Platform,
  Pressable,
  StatusBar as RNStatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';


const USERS = [
  {
    id: '1',
    name: 'Robert Cortez',
    role: 'Desenvolvedor Mobile',
    avatar: 'https://github.com/Robert-Cortez-Rudi.png',
  },
  {
    id: '2',
    name: 'Robert Rudi',
    role: 'Desenvolvedor Backend',
    avatar: '',
  },
];

function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{user.name}</Text>
        <Text style={styles.cardRole}>{user.role}</Text>
      </View>
    </View>
  );
}

export default function App() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Image source={{ uri: '../../assets/icon.png' }} style={styles.logo} />
        <Text style={styles.appName}>Meu App Robert React Native</Text>
        <Pressable style={styles.iconUser} onPress={() => router.push('/contact')}>
          <FontAwesome name="user-plus" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Usuários</Text>
        {USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: '#1e3a8a',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  appName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 4,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e2e8f0',
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  cardRole: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  iconUser: {
    marginLeft: 'auto'
  }
});
