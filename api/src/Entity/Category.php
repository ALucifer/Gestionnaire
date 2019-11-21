<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $label;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Achat", mappedBy="category")
     */
    private $achats;

    public function __construct()
    {
        $this->achats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getAchats()
    {
        return $this->achats;
    }

    /**
     * @param mixed $achats
     * @return Category
     */
    public function setAchats($achats)
    {
        $this->achats = $achats;
        return $this;
    }

    public function addAchat(Achat $achat)
    {
        $this->achats[] = $achat;
        return $this->achats;
    }
}
