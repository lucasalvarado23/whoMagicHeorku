import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),

        });
        console.log(this.state.pictures)
    }

 
    render() {
        return (
            <ImageUploader
                withPreview={true}
                withIcon={true}
                buttonText='Change profile picture'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}
export default ImageUpload;