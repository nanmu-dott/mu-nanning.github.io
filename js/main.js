// 页面加载完成后执行
window.onload = function() {
    // 初始化轮播图
    initCarousel();
    
    // 初始化导航菜单交互
    initNavigation();
    
    // 初始化成果申报书项目交互
    initApplicationForm();
    
    // 初始化附件及支撑材料交互
    initMaterials();
    
    // 初始化成果总结报告步骤交互
    initReportSteps();
    
    // 初始化页面滚动效果
    initScrollEffects();
    
    // 初始化友情链接交互
    initFooterLinks();
    
    // 初始化搜索功能
    initSearch();
    
    // 初始化按钮和链接的交互效果
    initButtonEffects();
};

// 轮播图功能
function initCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    
    // 自动轮播
    const carouselInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 5000);
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            clearInterval(carouselInterval);
            currentIndex = index;
            updateCarousel();
            // 重新开始自动轮播
            setTimeout(function() {
                setInterval(function() {
                    currentIndex = (currentIndex + 1) % totalItems;
                    updateCarousel();
                }, 5000);
            }, 5000);
        });
    });
    
    // 鼠标悬停时暂停轮播
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            clearInterval(carouselInterval);
        });
        
        carousel.addEventListener('mouseleave', function() {
            setInterval(function() {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            }, 5000);
        });
    }
    
    // 更新轮播图状态
    function updateCarousel() {
        // 更新轮播项
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        // 更新指示器
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
}

// 导航菜单交互
function initNavigation() {
    const navItems = document.querySelectorAll('.nav ul li');
    
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#004080';
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('click', function(e) {
            // 移除阻止默认行为，让超链接正常跳转
            // e.preventDefault();
            // const linkText = this.textContent.trim();
            // 这里可以添加页面跳转逻辑
            // alert('点击了: ' + linkText);
        });
    });
}

// 成果申报书项目交互
function initApplicationForm() {
    const formItems = document.querySelectorAll('.form-item');
    
    formItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemText = this.querySelector('p').textContent;
            // 这里可以添加跳转到对应内容的逻辑
            alert('点击了: ' + itemText);
        });
        
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f5f5f5';
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
            this.style.cursor = 'pointer';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// 附件及支撑材料交互
function initMaterials() {
    const materialLinks = document.querySelectorAll('.materials-list li a');
    
    materialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            // 这里可以添加跳转到对应内容的逻辑
            alert('点击了: ' + linkText);
        });
        
        link.addEventListener('mouseover', function() {
            this.style.color = '#003366';
            this.style.fontWeight = 'bold';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.color = '#333';
            this.style.fontWeight = 'normal';
        });
    });
}

// 成果总结报告步骤交互
function initReportSteps() {
    const reportSteps = document.querySelectorAll('.report-step');
    
    reportSteps.forEach(step => {
        step.addEventListener('click', function() {
            const stepText = this.querySelector('.step-text').textContent;
            // 这里可以添加跳转到对应内容的逻辑
            alert('点击了: ' + stepText);
        });
        
        step.addEventListener('mouseover', function() {
            const circle = this.querySelector('.step-circle');
            circle.style.backgroundColor = '#e6f0ff';
            circle.style.transform = 'scale(1.1)';
            circle.style.transition = 'all 0.3s ease';
            this.style.cursor = 'pointer';
        });
        
        step.addEventListener('mouseout', function() {
            const circle = this.querySelector('.step-circle');
            circle.style.backgroundColor = '#f5f5f5';
            circle.style.transform = 'scale(1)';
        });
    });
}

// 页面滚动效果
function initScrollEffects() {
    // 监听滚动事件，添加滚动效果
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 初始设置
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 触发一次滚动事件，使可见部分显示
    window.dispatchEvent(new Event('scroll'));
}

// 友情链接交互
function initFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            // 这里可以添加跳转到对应网站的逻辑
            alert('点击了友情链接: ' + linkText);
        });
        
        link.addEventListener('mouseover', function() {
            this.style.color = '#e6f0ff';
            this.style.textDecoration = 'underline';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.color = 'white';
            this.style.textDecoration = 'none';
        });
    });
}

// 搜索功能
function initSearch() {
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // 这里可以添加实际的搜索逻辑
                alert('搜索: ' + searchTerm);
            } else {
                alert('请输入搜索内容');
            }
        });
        
        // 按Enter键搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
        
        // 搜索框焦点效果
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#003366';
            this.style.boxShadow = '0 0 0 2px rgba(0, 51, 102, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
        
        // 搜索按钮悬停效果
        searchButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#004080';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        searchButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#003366';
            this.style.transform = 'scale(1)';
        });
    }
}

// 按钮和链接的交互效果
function initButtonEffects() {
    // 所有按钮的悬停效果
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 所有链接的悬停效果
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 页面访问量统计（模拟）
function updatePageViews() {
    const pageViewsElement = document.querySelector('.footer-info p:last-child');
    if (pageViewsElement) {
        // 模拟访问量增长
        let currentViews = 8523;
        setInterval(function() {
            currentViews++;
            pageViewsElement.innerHTML = `Copyright © 2026 All Rights Reserved. 甘肃交通职业技术学院 官网安全审核中 备案审核中 访问量：${currentViews}`;
        }, 30000); // 每30秒增加一次访问量
    }
}

// 调用访问量统计函数
updatePageViews();