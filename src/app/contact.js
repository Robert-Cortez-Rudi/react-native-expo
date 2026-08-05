import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

export default function Contact() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.appName}>Contato</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Fale conosco</Text>

        <View style={styles.card}>
          <FontAwesome name="envelope" size={20} color="#1e3a8a" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>E-mail</Text>
            <Text style={styles.cardRole}>contato@meuapp.com</Text>
          </View>
        </View>

        <View style={styles.card}>
          <FontAwesome name="phone" size={20} color="#1e3a8a" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardName}>Telefone</Text>
            <Text style={styles.cardRole}>(11) 99999-0000</Text>
          </View>
        </View>

        <Pressable style={styles.button} onPress={() => router.push('/form')}>
          <FontAwesome name="pencil-square-o" size={18} color="#fff" />
          <Text style={styles.buttonText}>Ir para o formulário</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => router.push('/')}
        >
          <FontAwesome name="home" size={18} color="#1e3a8a" />
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
            Voltar para a home
          </Text>
        </Pressable>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#1e3a8a',
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: 8,
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1e3a8a',
    marginTop: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#1e3a8a',
  },
});
