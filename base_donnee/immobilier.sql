-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 13 mai 2022 à 19:48
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `immobilier`
--

-- --------------------------------------------------------

--
-- Structure de la table `bien`
--

CREATE TABLE `bien` (
  `id` int(225) NOT NULL,
  `type_bien` varchar(50) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `commune` varchar(50) NOT NULL,
  `nom_bien` varchar(40) NOT NULL,
  `piece` varchar(50) NOT NULL,
  `prix_bien` varchar(50) NOT NULL,
  `chambre` varchar(50) NOT NULL,
  `douche` varchar(50) NOT NULL,
  `superficie` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `detail` text NOT NULL,
  `service` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `bien`
--

INSERT INTO `bien` (`id`, `type_bien`, `ville`, `commune`, `nom_bien`, `piece`, `prix_bien`, `chambre`, `douche`, `superficie`, `description`, `detail`, `service`, `image`) VALUES
(34, 'Appartement', 'abidjan', 'Cocody-angre', 'Immeuble', '3 pièce(s)', '500.000', '5 chambre(s)', '3 douche(s)', '100 m²', 'Belle villa lumineuse , aux volumes généreux , bonne situation géographique dans un quartier résidentiel .', 'Air conditionné, Fenêtres coulissantes, Groupe électrogène, Maison de gardien, Meublé, Abri de voiture, Buanderie commune', 'Aéroport, Centre ville, Cinéma, Commerces, Crèche, École secondaire, Hôpital/clinique, Médecin, Supermarché', 'uploads\\photo-1651851024814.jpeg'),
(37, 'Maison', 'Abidjan', 'Riviera 3', 'Villa haribo', '5 pièce(s)', '1.000.000', '3 chambre(s)', '2 douche(s)', '3000 m²', 'Grand villa de 5 pièces , dans une commune  sécurisé\r\navec 2 places de parking .', 'Air conditionné, Fenêtres coulissantes, Groupe électrogène, Internet, Alarme incendie, Ascenseur, Gardien, Interphone, Porte blindée, Cuisinière, Four, Four à micro-ondes', 'Aéroport, Centre ville, Commerces, Crèche, École primaire, École secondaire', 'uploads\\photo-1652460840293.jpeg'),
(38, 'Maison', 'Abidjan', 'Riviera 4', 'VILLA - BELLE FLEURS', '8 pièce(s)', '800.000', '5 chambre(s)', '3 douche(s)', '1200 m²', 'Grande villa de 8 piéces non loin du rond point Mel Théodore, bonne situation géographique , proche des écoles internationales.', 'Fenêtres coulissantes, Maison de gardien, Abri de voiture, Gardien', 'Aéroport, Centre ville, Cinéma, Commerces, Crèche, École primaire, École secondaire, Hôpital/clinique, Médecin', 'uploads\\photo-1652461588283.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `numero` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `idbien` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id`, `nom`, `email`, `numero`, `description`, `idbien`) VALUES
(3, 'mohamed', 'kionoumamadou.00@gmail.com', '1234567890', 'Bonjour,J\'ai vu votre annonce sur le site Je souhaiterais obtenir des informations complémentaires sur ce bien et, éventuellement, convenir d\'un rendez-vous pour une visite\r\n Merci, par avance, de bien vouloir me contacter dès que possible.\r\nCordialement,\r\n', 34);

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `bienid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `image`
--

INSERT INTO `image` (`id`, `nom`, `bienid`) VALUES
(18, 'uploads\\image-1651851049969.jpeg', 34),
(19, 'uploads\\image-1651851052208.jpeg', 34),
(20, 'uploads\\image-1651851052960.jpeg', 34),
(21, 'uploads\\image-1651851053315.jpeg', 34),
(22, 'uploads\\image-1651851053462.jpeg', 34),
(23, 'uploads\\image-1651855132777.jpeg', 35),
(24, 'uploads\\image-1651855138350.jpeg', 35),
(25, 'uploads\\image-1651855139612.jpeg', 35),
(26, 'uploads\\image-1651855140756.jpeg', 35),
(27, 'uploads\\image-1651855141211.jpeg', 35),
(28, 'uploads\\image-1651855141455.jpeg', 35),
(29, 'uploads\\image-1652282248939.jpeg', 36),
(30, 'uploads\\image-1652282249119.jpeg', 36),
(31, 'uploads\\image-1652282249214.jpeg', 36),
(32, 'uploads\\image-1652460879126.jpeg', 37),
(33, 'uploads\\image-1652460879911.jpeg', 37),
(34, 'uploads\\image-1652460879977.jpeg', 37),
(35, 'uploads\\image-1652461610145.jpeg', 38),
(36, 'uploads\\image-1652461610338.jpeg', 38),
(37, 'uploads\\image-1652461610553.jpeg', 38);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(225) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `numero` varchar(13) NOT NULL,
  `password` text NOT NULL,
  `lieu` varchar(200) NOT NULL DEFAULT ' ',
  `image` varchar(200) NOT NULL DEFAULT 'images/PngItem.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `numero`, `password`, `lieu`, `image`) VALUES
(14, 'Pen', 'arnaud', 'pen@gmail.com', '0708096754', '$2a$10$lQHTMlJlS51InR2hw9B0ceckY8gCIXxpm6NhiL8qRkrNfjUIid5sq', ' ', 'images/PngItem.png'),
(15, 'Affou', 'ouattara', 'affou@gmail.com', '0976345644', '$2a$10$lQHTMlJlS51InR2hw9B0ceckY8gCIXxpm6NhiL8qRkrNfjUIid5sq', ' ', 'images/PngItem.png');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bien`
--
ALTER TABLE `bien`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bienid` (`bienid`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `bien`
--
ALTER TABLE `bien`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
