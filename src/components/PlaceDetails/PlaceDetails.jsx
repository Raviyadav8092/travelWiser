import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({place , selected , refProp}) =>{

        const classes = useStyles();

        if(selected) refProp?.current?.scrollIntoView({ behavior:"smooth" , block:"start" })

    return (
            <Card elevation={6}>

            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'}
                title={place.name}
            />

                <CardContent>
                    <Typography gutterBottom variant="h5">{place.name}</Typography>

                    {/* Rating */}
                    <Box display="flex" justifyContent="space-between" my={2}>
                        <Rating name="read-only" value={Number(place.rating)} readOnly />
                        <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                    </Box>
                    {/* Pricing*/}
                    <Box display="flex" justifiContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
                    </Box> 
                    {/* Ranking */}
                    <Box display="flex" justifiContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
                    </Box>


                    {place?.cuisine?.map(({ name }) => (
                        <Chip key={name} size="small" label={name} className={classes.chip} />
                     ))}
                    {place.address && (
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                        </Typography>
                    )}
                    {place.phone && (
                        <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                        </Typography>
                    )}


                    <CardActions>
                        <Button size="small" color="primary" onClick={()=>window.open(place.web_url, '_blank')}>
                            Trip Advisor
                        </Button>

                        <Button size="small" color="primary" onClick={()=>window.open(place.website, '_blank')}>
                            Website
                        </Button>
                    </CardActions>

                </CardContent>

            </Card>
        
    );
}

export default PlaceDetails;