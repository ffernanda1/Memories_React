export default (posts, action) => {
    switch (action.type) {
        case 'FECTH ALL':
            return posts;
        case 'CREATE':
            return posts; 
        default:
            return posts;
    }
}