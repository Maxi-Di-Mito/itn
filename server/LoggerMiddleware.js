/**
 * Created by maximiliano.dimito on 6/10/2016.
 */
export default function(req, res, next) {
    var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(date, 'Type:', req.method, '- URL:', req.originalUrl);
    console.log(JSON.stringify(req.body));
    next();
}