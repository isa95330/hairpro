<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EshopController extends AbstractController
{
    #[Route('/eshop', name: 'eshop')]
    public function index(CategoriesRepository $categoriesRepository): Response
    {
     
        return $this->render('E_shop/index.html.twig',[
        'categories' => $categoriesRepository->findBy([] ,
        ['categoryOrder' => 'asc'])
    ]);
}
}
