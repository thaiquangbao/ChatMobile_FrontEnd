import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import styles from './styles';

import Button from '../../components/Button';
import COLORS from '../../components/Colors';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Search from '../../components/Search';
import { MailIcon, PasswordIcon } from '../../components/Icons';

function Login() {
    const navigation = useNavigation();
    // const user = {
    //     username: 'admin',
    //     password: 'admin',
    // };

    return (
        <View style={{ ...styles.container, backgroundColor: COLORS.white }}>
            <DefaultLayout
                headerText="ZenChat"
                headerStyle={{ alignSelf: 'center' }}
                headerTextStyle={{
                    fontSize: 25,
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    marginBottom: 40,
                }}
            >
                <View>
                    <Search
                        placeholder="Email"
                        LeftIcon={MailIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 160 }}
                    />
                    <Search
                        placeholder="Mật khẩu"
                        LeftIcon={PasswordIcon}
                        showBtnFilter={false}
                        height={70}
                        style={{ marginTop: 20 }}
                    />
                </View>

                <View style={{ marginTop: 50 }}>
                    <Button
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 15,
                            borderRadius: 10,
                        }}
                        onPress={() => {
                            user
                                ? navigation.navigate('Main')
                                : navigation.navigate('Home');
                        }}
                    >
                        <Text style={{ ...styles.login, color: COLORS.white }}>
                            Đăng Nhập
                        </Text>
                    </Button>

                    <Button>
                        <Text style={styles.forgot}>Quên mật khẩu ?</Text>
                    </Button>

                    <Button onPress={() => navigation.navigate('SignUpScreen')}>
                        <Text
                            style={[styles.forgot, { color: COLORS.textColor }]}
                        >
                            Tạo tài khoản?{' '}
                            <Text style={{ color: COLORS.primary }}>
                                Đăng Ký
                            </Text>
                        </Text>
                    </Button>
                </View>
            </DefaultLayout>
        </View>
    );
}

export default Login;
