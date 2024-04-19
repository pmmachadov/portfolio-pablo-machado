import { ImageComponentProps } from "types";

const PersonalImage: React.FC<ImageComponentProps> = ({ src = '/assets/images/personalPhoto.jpg', alt, className }) => {
    return (
        <img
            src={ src }
            alt={ alt }
            className={ className }
            style={ {
                width: '200px', height: '200px', objectFit: 'cover', borderRadius: '2rem', float: 'right', margin: '3rem', marginTop: 'auto'
            } }
        />
    );
}

export default PersonalImage;