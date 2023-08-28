<?php

namespace App\DataFixtures;

use App\Entity\Categories;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\String\Slugger\SluggerInterface;

class CategoriesFixtures extends Fixture
{
    public function __construct(private SluggerInterface $slugger)
    {

    }
    public function load(ObjectManager $manager): void
    {
        $parent = $this->createCategory('Produits capillaire',null , $manager);
       
$this->createCategory('Shampooing',$parent, $manager);
$this->createCategory('Soins hydratant',$parent, $manager);
$this->createCategory('Coiffant',$parent, $manager);




        $manager->flush();
    }
    public function createCategory(string $name,Categories $parent = null, ObjectManager $manager){
        $category =new Categories();
$category->setName($name);
$category->setSlug($this->slugger->slug($category->getName()));
$category->setParent($parent);
$manager->persist($category);
return  $category;

    }
}
