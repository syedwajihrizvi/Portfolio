import { Card, CardActions, CardContent, Button, Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LaunchIcon from "@mui/icons-material/Launch";

export type publicationInformation = {
  title: string;
  description: string;
  viewPublication: string;
  image: string;
};

interface Props {
  information: publicationInformation;
}

function PublicationCard({ information }: Props) {
  return (
    <Card className="publication-card shadow" sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box className="publication-card__content">
        <CardContent sx={{ padding: "1rem 1rem" }}>
          <Typography className="publication-card__title">{information.title}</Typography>
          <Typography className="publication-card__description">{information.description}</Typography>
        </CardContent>
      </Box>

      <Box className="publication-card__image" sx={{ width: "100%", maxHeight: 180, overflow: "hidden", px: 1 }}>
        <img
          src={information.image}
          alt={information.title}
          style={{ width: "100%", height: "100%", maxHeight: 180, objectFit: "contain", display: "block" }}
        />
      </Box>

      <CardActions className="publication-card__action" sx={{ mt: "auto" }}>
        <Link
          href={information.viewPublication}
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Button className="button button--primary" startIcon={<LaunchIcon />}>
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default PublicationCard;
