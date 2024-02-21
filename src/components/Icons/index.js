import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const SearchIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons name="search" size={size} color={color} style={style} />
    );
};

export const FilterIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <MaterialIcons
            name="filter-list"
            size={size}
            color={color}
            style={style}
        />
    );
};

export const BellIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="bells" size={size} color={color} style={style} />;
};

export const PersonIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <Ionicons name="person" size={size} color={color} style={style} />;
};

export const PhoneIcon = ({ size = 24, color = 'black', style = {} }) => {
    return (
        <Ionicons name="call-outline" size={size} color={color} style={style} />
    );
};

export const MailIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <Feather name="mail" size={size} color={color} style={style} />;
};

export const PasswordIcon = ({ size = 24, color = 'black', style = {} }) => {
    return <AntDesign name="lock" size={size} color={color} style={style} />;
};


